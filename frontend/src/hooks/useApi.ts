import { Job } from "../interfaces/interfaces";
import { api } from "../lib/axios";
import { AxiosError } from "axios";
import { useState } from "react";

export const useApi = () => {
  const [data, setData] = useState<Job[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Função para fazer a requisição GET
  const get = async (endpoint: string) => {
    setIsLoading(true);
    try {
      const response = await api.get(endpoint);
      setData(response.data);
    } catch (err) {
      if (err instanceof Error) {
        setError(`Ocorreu um erro: ${err.message} !`);
      } else {
        setError("Erro desconhecido");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Função para fazer a requisição GET por ID
  const getById = async (endpoint: string) => {
    setIsLoading(true);
    try {
      const response = await api.get(endpoint);
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        setError(`Ocorreu um erro: ${err.message} !`);
      } else {
        setError("Erro desconhecido");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Função para fazer a requisição POST
  const post = async (payload: FormData, endpoint: string) => {
    setIsLoading(true);
    try {
      const response = await api.post(endpoint, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.status === 400) {
          setError("Título e Descrição são campos obrigatórios");
        } else {
          setError(`Ocorreu um erro: ${err.message} !`);
        }
      } else {
        setError("Erro desconhecido");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Função para fazer a requisição PUT
  const put = async (payload: FormData, endpoint: string) => {
    setIsLoading(true);
    try {
      const response = await api.put(endpoint, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido");
      }
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Função para fazer a requisição PATCH
  const patch = async (payload: FormData, endpoint: string) => {
    setIsLoading(true);
    try {
      await api.patch(endpoint, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Função para fazer a requisição DELETE
  const del = async (endpoint: string) => {
    setIsLoading(true);
    try {
      await api.delete(endpoint);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    error,
    isLoading,
    get,
    post,
    put,
    patch,
    del,
    setData,
    setError,
    getById,
  };
};
