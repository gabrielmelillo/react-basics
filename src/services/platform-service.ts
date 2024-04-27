import apiClient from "./api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface ApiResponse {
  count: number;
  results: Platform[];
}

class PlatformService {
  getPlatforms() {
    return apiClient.get<ApiResponse>("/platforms/lists/parents");
  }
}

export default new PlatformService();
