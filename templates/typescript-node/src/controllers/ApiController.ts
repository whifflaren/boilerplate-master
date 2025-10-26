import { Router, Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { CreateUserRequest, UpdateUserRequest, UserResponse } from '../types/User';
import { logger } from '../utils/logger';

export class ApiController {
  private router: Router;
  private userService: UserService;

  constructor(userService: UserService) {
    this.router = Router();
    this.userService = userService;
    this.setupRoutes();
  }

  private setupRoutes(): void {
    // Users routes
    this.router.get('/users', this.getUsers.bind(this));
    this.router.get('/users/:id', this.getUserById.bind(this));
    this.router.post('/users', this.createUser.bind(this));
    this.router.put('/users/:id', this.updateUser.bind(this));
    this.router.delete('/users/:id', this.deleteUser.bind(this));
  }

  public getRouter(): Router {
    return this.router;
  }

  private async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAllUsers();
      const userResponses: UserResponse[] = users.map(this.mapUserToResponse);
      res.json(userResponses);
    } catch (error) {
      logger.error('Error getting users:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  private async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        res.status(400).json({ error: 'Invalid user ID' });
        return;
      }

      const user = await this.userService.getUserById(id);
      
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      res.json(this.mapUserToResponse(user));
    } catch (error) {
      logger.error('Error getting user by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  private async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, email }: CreateUserRequest = req.body;

      if (!name || !email) {
        res.status(400).json({ error: 'Name and email are required' });
        return;
      }

      // Check if email already exists
      const emailExists = await this.userService.emailExists(email);
      if (emailExists) {
        res.status(409).json({ error: 'Email already exists' });
        return;
      }

      const user = await this.userService.createUser({ name, email });
      res.status(201).json(this.mapUserToResponse(user));
    } catch (error) {
      logger.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  private async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        res.status(400).json({ error: 'Invalid user ID' });
        return;
      }

      const { name, email }: UpdateUserRequest = req.body;

      if (!name && !email) {
        res.status(400).json({ error: 'At least one field (name or email) is required' });
        return;
      }

      // Check if email already exists (excluding current user)
      if (email) {
        const emailExists = await this.userService.emailExists(email, id);
        if (emailExists) {
          res.status(409).json({ error: 'Email already exists' });
          return;
        }
      }

      const user = await this.userService.updateUser(id, { name, email });
      
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      res.json(this.mapUserToResponse(user));
    } catch (error) {
      logger.error('Error updating user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  private async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        res.status(400).json({ error: 'Invalid user ID' });
        return;
      }

      const deleted = await this.userService.deleteUser(id);
      
      if (!deleted) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      res.status(204).send();
    } catch (error) {
      logger.error('Error deleting user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  private mapUserToResponse(user: any): UserResponse {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString()
    };
  }
}
