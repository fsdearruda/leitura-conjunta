type User = {
  id: number;
  nome: string;
  foto: string;
  skoob?: string;
  pages: number;
};

interface UserResponse {
  nome: string;
  skoob: string;
  foto: string;
}

export type { User, UserResponse };
