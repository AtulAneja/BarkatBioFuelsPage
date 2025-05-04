import { users, type User, type InsertUser, 
  contactSubmissions, type ContactSubmission, type InsertContactSubmission,
  newsletterSubscriptions, type NewsletterSubscription, type InsertNewsletterSubscription 
} from "@shared/schema";

// Interface for all storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Contact submissions operations
  getContactSubmission(id: number): Promise<ContactSubmission | undefined>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  createContactSubmission(submission: InsertContactSubmission & { submittedAt: string }): Promise<ContactSubmission>;

  // Newsletter subscription operations
  getNewsletterSubscription(id: number): Promise<NewsletterSubscription | undefined>;
  getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined>;
  getAllNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
  createNewsletterSubscription(subscription: InsertNewsletterSubscription & { subscribedAt: string }): Promise<NewsletterSubscription>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  private userCurrentId: number;
  private contactCurrentId: number;
  private newsletterCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.newsletterSubscriptions = new Map();
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
    this.newsletterCurrentId = 1;
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact submission operations
  async getContactSubmission(id: number): Promise<ContactSubmission | undefined> {
    return this.contactSubmissions.get(id);
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async createContactSubmission(submission: InsertContactSubmission & { submittedAt: string }): Promise<ContactSubmission> {
    const id = this.contactCurrentId++;
    const contactSubmission: ContactSubmission = { ...submission, id };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  // Newsletter subscription operations
  async getNewsletterSubscription(id: number): Promise<NewsletterSubscription | undefined> {
    return this.newsletterSubscriptions.get(id);
  }

  async getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined> {
    return Array.from(this.newsletterSubscriptions.values()).find(
      (subscription) => subscription.email === email,
    );
  }

  async getAllNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptions.values());
  }

  async createNewsletterSubscription(subscription: InsertNewsletterSubscription & { subscribedAt: string }): Promise<NewsletterSubscription> {
    const id = this.newsletterCurrentId++;
    const newsletterSubscription: NewsletterSubscription = { ...subscription, id };
    this.newsletterSubscriptions.set(id, newsletterSubscription);
    return newsletterSubscription;
  }
}

export const storage = new MemStorage();
