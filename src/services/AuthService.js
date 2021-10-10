
import { baseService } from "./baseService";

export class AuthService extends baseService {
  constructor() {
    super();
  }

  fetchCinema = () => {
    return this.get(
      `/api/QuanLyNguoiDung/DangNhap`
    );
  };

  

}

export const authSerivce = new AuthService();