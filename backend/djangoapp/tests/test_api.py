from django.test import TestCase


class JobTests(TestCase):
    def test_get_all_jobs_status_code(self):
        response = self.client.get("/api/jobs")
        self.assertEqual(response.status_code, 200)
