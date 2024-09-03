# GET all
def test_get_all_jobs_status_code(client):
    response = client.get("/api/jobs/")
    assert response.status_code == 200


# GET by ID
def test_get_job_by_id_status_code(client):
    response = client.get("/api/jobs/1/")
    assert response.status_code == 200


# POST
def test_post_job_status_code(client):
    response = client.post(
        "/api/jobs/", {"title": "Test", "description": "test", "image": ""}
    )
    assert response.status_code == 201


# PUT
def test_put_job_status_code(client):
    response = client.put(
        "/api/jobs/1/", {"title": "Test1", "description": "test1"}
    )  # noqa
    assert response.status_code == 200


# DELETE
def test_delete_job_status_code(client):
    response = client.delete("/api/jobs/1/")
    assert response.status_code == 204
