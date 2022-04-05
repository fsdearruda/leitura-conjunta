type User = {
  id: number;
  nome: string;
  apelido: string;
  foto: string;
  skoob?: string;
  pages: number;
  following: {
    success: 1 | 0;
    status: 1 | 0;
    description: string;
  };
  friends: {
    success: 1 | 0;
    status: 1 | 0;
    description: string;
  };
};

interface UserResponse {
  nome: string;
  skoob: string;
  foto: string;
}

export type { User, UserResponse };
