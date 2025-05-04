import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      const submission = await storage.createContactSubmission({
        ...validatedData,
        submittedAt: new Date().toISOString()
      });
      
      return res.status(201).json({
        message: "Contact form submitted successfully",
        id: submission.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Invalid form data",
          errors: error.errors
        });
      }
      
      return res.status(500).json({
        message: "Failed to submit contact form"
      });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      
      // Check if email is already subscribed
      const existingSubscription = await storage.getNewsletterSubscriptionByEmail(validatedData.email);
      if (existingSubscription) {
        return res.status(200).json({
          message: "Email is already subscribed"
        });
      }
      
      const subscription = await storage.createNewsletterSubscription({
        ...validatedData,
        subscribedAt: new Date().toISOString()
      });
      
      return res.status(201).json({
        message: "Subscription successful",
        id: subscription.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Invalid email address",
          errors: error.errors
        });
      }
      
      return res.status(500).json({
        message: "Failed to subscribe to newsletter"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
