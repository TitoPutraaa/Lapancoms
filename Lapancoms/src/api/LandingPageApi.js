import axiosAdmin from "./axiosAdmin";

const LandingPageApi = {
  s1h1: (data) => axiosAdmin.post("/landingpage/s1h1", data),
  s1p1: (data) => axiosAdmin.post("/landingpage/s1p1", data),
  s2h1: (data) => axiosAdmin.post("/landingpage/s2h1", data),
  s2p1: (data) => axiosAdmin.post("/landingpage/s2p1", data),
  s3h1: (data) => axiosAdmin.post("/landingpage/s3h1", data),
  s3p1: (data) => axiosAdmin.post("/landingpage/s3p1", data),
  fp1: (data) => axiosAdmin.post("/landingpage/fp1", data),
  link: (data) => axiosAdmin.post("/landingpage/link", data),
};

export default LandingPageApi;
