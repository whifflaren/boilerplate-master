import { UserService } from '../src/services/UserService';
import { CreateUserRequest } from '../src/types/User';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  describe('getAllUsers', () => {
    it('should return all users', async () => {
      const users = await userService.getAllUsers();
      expect(Array.isArray(users)).toBe(true);
      expect(users.length).toBeGreaterThan(0);
    });
  });

  describe('getUserById', () => {
    it('should return user when found', async () => {
      const user = await userService.getUserById(1);
      expect(user).toBeDefined();
      expect(user?.id).toBe(1);
    });

    it('should return null when user not found', async () => {
      const user = await userService.getUserById(999);
      expect(user).toBeNull();
    });
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const userData: CreateUserRequest = {
        name: 'Test User',
        email: 'test@example.com'
      };

      const user = await userService.createUser(userData);
      expect(user).toBeDefined();
      expect(user.name).toBe(userData.name);
      expect(user.email).toBe(userData.email);
      expect(user.id).toBeDefined();
    });
  });

  describe('updateUser', () => {
    it('should update user when found', async () => {
      const updateData = { name: 'Updated Name' };
      const user = await userService.updateUser(1, updateData);
      
      expect(user).toBeDefined();
      expect(user?.name).toBe(updateData.name);
    });

    it('should return null when user not found', async () => {
      const updateData = { name: 'Updated Name' };
      const user = await userService.updateUser(999, updateData);
      
      expect(user).toBeNull();
    });
  });

  describe('deleteUser', () => {
    it('should delete user when found', async () => {
      const result = await userService.deleteUser(1);
      expect(result).toBe(true);
    });

    it('should return false when user not found', async () => {
      const result = await userService.deleteUser(999);
      expect(result).toBe(false);
    });
  });

  describe('emailExists', () => {
    it('should return true when email exists', async () => {
      const exists = await userService.emailExists('john@example.com');
      expect(exists).toBe(true);
    });

    it('should return false when email does not exist', async () => {
      const exists = await userService.emailExists('nonexistent@example.com');
      expect(exists).toBe(false);
    });

    it('should return false when email exists but is excluded', async () => {
      const exists = await userService.emailExists('john@example.com', 1);
      expect(exists).toBe(false);
    });
  });
});
