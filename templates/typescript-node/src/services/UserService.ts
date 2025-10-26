import { User, CreateUserRequest, UpdateUserRequest } from '../types/User';

export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      createdAt: new Date('2023-01-01'),
      updatedAt: new Date('2023-01-01')
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      createdAt: new Date('2023-01-02'),
      updatedAt: new Date('2023-01-02')
    }
  ];

  private nextId = 3;

  /**
   * Get all users
   */
  async getAllUsers(): Promise<User[]> {
    return [...this.users];
  }

  /**
   * Get user by ID
   */
  async getUserById(id: number): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }

  /**
   * Create a new user
   */
  async createUser(userData: CreateUserRequest): Promise<User> {
    const now = new Date();
    const newUser: User = {
      id: this.nextId++,
      name: userData.name,
      email: userData.email,
      createdAt: now,
      updatedAt: now
    };

    this.users.push(newUser);
    return newUser;
  }

  /**
   * Update user by ID
   */
  async updateUser(id: number, userData: UpdateUserRequest): Promise<User | null> {
    const userIndex = this.users.findIndex(user => user.id === id);
    
    if (userIndex === -1) {
      return null;
    }

    const updatedUser = {
      ...this.users[userIndex],
      ...userData,
      updatedAt: new Date()
    };

    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  /**
   * Delete user by ID
   */
  async deleteUser(id: number): Promise<boolean> {
    const userIndex = this.users.findIndex(user => user.id === id);
    
    if (userIndex === -1) {
      return false;
    }

    this.users.splice(userIndex, 1);
    return true;
  }

  /**
   * Check if email exists
   */
  async emailExists(email: string, excludeId?: number): Promise<boolean> {
    return this.users.some(user => user.email === email && user.id !== excludeId);
  }
}
