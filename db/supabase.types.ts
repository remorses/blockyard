export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Domain: {
        Row: {
          createdAt: string
          domainType: Database["public"]["Enums"]["DomainType"]
          host: string
          id: string
          siteId: string
        }
        Insert: {
          createdAt?: string
          domainType: Database["public"]["Enums"]["DomainType"]
          host: string
          id: string
          siteId: string
        }
        Update: {
          createdAt?: string
          domainType?: Database["public"]["Enums"]["DomainType"]
          host?: string
          id?: string
          siteId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Domain_siteId_fkey"
            columns: ["siteId"]
            referencedRelation: "Site"
            referencedColumns: ["siteId"]
          }
        ]
      }
      Generation: {
        Row: {
          chars: number
          createdAt: string
          id: number
          orgId: string
          words: number
        }
        Insert: {
          chars: number
          createdAt?: string
          id?: number
          orgId: string
          words: number
        }
        Update: {
          chars?: number
          createdAt?: string
          id?: number
          orgId?: string
          words?: number
        }
        Relationships: [
          {
            foreignKeyName: "Generation_orgId_fkey"
            columns: ["orgId"]
            referencedRelation: "Org"
            referencedColumns: ["orgId"]
          }
        ]
      }
      GithubForUser: {
        Row: {
          accountLogin: string
          avatarUrl: string | null
          clientId: string
          company: string | null
          email: string | null
          name: string | null
          oauthToken: string
          userId: string
        }
        Insert: {
          accountLogin: string
          avatarUrl?: string | null
          clientId: string
          company?: string | null
          email?: string | null
          name?: string | null
          oauthToken: string
          userId: string
        }
        Update: {
          accountLogin?: string
          avatarUrl?: string | null
          clientId?: string
          company?: string | null
          email?: string | null
          name?: string | null
          oauthToken?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "GithubForUser_userId_fkey"
            columns: ["userId"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      GithubInstallation: {
        Row: {
          accountAvatarUrl: string
          accountLogin: string
          accountType: Database["public"]["Enums"]["GithubAccountType"]
          appId: string | null
          createdAt: string
          installationId: number
          oauthToken: string | null
          orgId: string
          status: Database["public"]["Enums"]["installationStatus"]
        }
        Insert: {
          accountAvatarUrl?: string
          accountLogin?: string
          accountType?: Database["public"]["Enums"]["GithubAccountType"]
          appId?: string | null
          createdAt?: string
          installationId: number
          oauthToken?: string | null
          orgId: string
          status?: Database["public"]["Enums"]["installationStatus"]
        }
        Update: {
          accountAvatarUrl?: string
          accountLogin?: string
          accountType?: Database["public"]["Enums"]["GithubAccountType"]
          appId?: string | null
          createdAt?: string
          installationId?: number
          oauthToken?: string | null
          orgId?: string
          status?: Database["public"]["Enums"]["installationStatus"]
        }
        Relationships: [
          {
            foreignKeyName: "GithubInstallation_orgId_fkey"
            columns: ["orgId"]
            referencedRelation: "Org"
            referencedColumns: ["orgId"]
          }
        ]
      }
      GithubIntegration: {
        Row: {
          defaultBranchName: string | null
          githubRepoId: string
          installationId: number
          orgId: string | null
          owner: string
          repo: string
          siteId: string
        }
        Insert: {
          defaultBranchName?: string | null
          githubRepoId: string
          installationId: number
          orgId?: string | null
          owner: string
          repo: string
          siteId: string
        }
        Update: {
          defaultBranchName?: string | null
          githubRepoId?: string
          installationId?: number
          orgId?: string | null
          owner?: string
          repo?: string
          siteId?: string
        }
        Relationships: [
          {
            foreignKeyName: "GithubIntegration_installationId_orgId_fkey"
            columns: ["installationId", "orgId"]
            referencedRelation: "GithubInstallation"
            referencedColumns: ["installationId", "orgId"]
          },
          {
            foreignKeyName: "GithubIntegration_orgId_fkey"
            columns: ["orgId"]
            referencedRelation: "Org"
            referencedColumns: ["orgId"]
          },
          {
            foreignKeyName: "GithubIntegration_siteId_fkey"
            columns: ["siteId"]
            referencedRelation: "Site"
            referencedColumns: ["siteId"]
          }
        ]
      }
      Org: {
        Row: {
          createdAt: string
          name: string
          orgId: string
          ssoProviderId: string | null
          stripeCustomerId: string | null
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          name?: string
          orgId: string
          ssoProviderId?: string | null
          stripeCustomerId?: string | null
          updatedAt?: string
        }
        Update: {
          createdAt?: string
          name?: string
          orgId?: string
          ssoProviderId?: string | null
          stripeCustomerId?: string | null
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Org_ssoProviderId_fkey"
            columns: ["ssoProviderId"]
            referencedRelation: "sso_providers"
            referencedColumns: ["id"]
          }
        ]
      }
      OrgInviteLink: {
        Row: {
          createdAt: string
          forPageId: string | null
          forSiteId: string | null
          key: string
          orgId: string
        }
        Insert: {
          createdAt?: string
          forPageId?: string | null
          forSiteId?: string | null
          key: string
          orgId: string
        }
        Update: {
          createdAt?: string
          forPageId?: string | null
          forSiteId?: string | null
          key?: string
          orgId?: string
        }
        Relationships: [
          {
            foreignKeyName: "OrgInviteLink_orgId_fkey"
            columns: ["orgId"]
            referencedRelation: "Org"
            referencedColumns: ["orgId"]
          }
        ]
      }
      OrgsUsers: {
        Row: {
          guestSiteIds: string[] | null
          orgId: string
          role: Database["public"]["Enums"]["UserRole"]
          userId: string
        }
        Insert: {
          guestSiteIds?: string[] | null
          orgId: string
          role?: Database["public"]["Enums"]["UserRole"]
          userId: string
        }
        Update: {
          guestSiteIds?: string[] | null
          orgId?: string
          role?: Database["public"]["Enums"]["UserRole"]
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "OrgsUsers_orgId_fkey"
            columns: ["orgId"]
            referencedRelation: "Org"
            referencedColumns: ["orgId"]
          },
          {
            foreignKeyName: "OrgsUsers_userId_fkey"
            columns: ["userId"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      Page: {
        Row: {
          branchId: string
          createdAt: string
          document: string | null
          lastUpdatedFrom: string | null
          markdown: string
          pageId: string
          siteId: string
          slug: string
          updatedAt: string
        }
        Insert: {
          branchId: string
          createdAt?: string
          document?: string | null
          lastUpdatedFrom?: string | null
          markdown?: string
          pageId: string
          siteId: string
          slug: string
          updatedAt: string
        }
        Update: {
          branchId?: string
          createdAt?: string
          document?: string | null
          lastUpdatedFrom?: string | null
          markdown?: string
          pageId?: string
          siteId?: string
          slug?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Page_branchId_siteId_fkey"
            columns: ["branchId", "siteId"]
            referencedRelation: "SiteBranch"
            referencedColumns: ["branchId", "siteId"]
          },
          {
            foreignKeyName: "Page_siteId_fkey"
            columns: ["siteId"]
            referencedRelation: "Site"
            referencedColumns: ["siteId"]
          }
        ]
      }
      PaymentForCredits: {
        Row: {
          createdAt: string
          email: string | null
          id: string
          orderId: string
          orgId: string
          productId: string
          subscriptionId: string | null
          variantId: string
          variantName: string | null
        }
        Insert: {
          createdAt?: string
          email?: string | null
          id: string
          orderId: string
          orgId: string
          productId: string
          subscriptionId?: string | null
          variantId: string
          variantName?: string | null
        }
        Update: {
          createdAt?: string
          email?: string | null
          id?: string
          orderId?: string
          orgId?: string
          productId?: string
          subscriptionId?: string | null
          variantId?: string
          variantName?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "PaymentForCredits_orgId_fkey"
            columns: ["orgId"]
            referencedRelation: "Org"
            referencedColumns: ["orgId"]
          }
        ]
      }
      Site: {
        Row: {
          createdAt: string
          installationId: number | null
          name: string
          orgId: string
          siteId: string
        }
        Insert: {
          createdAt?: string
          installationId?: number | null
          name: string
          orgId: string
          siteId: string
        }
        Update: {
          createdAt?: string
          installationId?: number | null
          name?: string
          orgId?: string
          siteId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Site_installationId_orgId_fkey"
            columns: ["installationId", "orgId"]
            referencedRelation: "GithubInstallation"
            referencedColumns: ["installationId", "orgId"]
          },
          {
            foreignKeyName: "Site_orgId_fkey"
            columns: ["orgId"]
            referencedRelation: "Org"
            referencedColumns: ["orgId"]
          }
        ]
      }
      SiteBranch: {
        Row: {
          basePath: string | null
          branchId: string
          createdAt: string
          githubBranchName: string | null
          pagesTree: Json
          siteId: string
        }
        Insert: {
          basePath?: string | null
          branchId: string
          createdAt?: string
          githubBranchName?: string | null
          pagesTree: Json
          siteId: string
        }
        Update: {
          basePath?: string | null
          branchId?: string
          createdAt?: string
          githubBranchName?: string | null
          pagesTree?: Json
          siteId?: string
        }
        Relationships: [
          {
            foreignKeyName: "SiteBranch_siteId_fkey"
            columns: ["siteId"]
            referencedRelation: "Site"
            referencedColumns: ["siteId"]
          }
        ]
      }
      SiteCustomization: {
        Row: {
          createdAt: string
          faviconUrl: string | null
          layout: string | null
          logoImgUrlDark: string | null
          logoImgUrlLight: string | null
          primaryColor: string | null
          siteId: string
        }
        Insert: {
          createdAt?: string
          faviconUrl?: string | null
          layout?: string | null
          logoImgUrlDark?: string | null
          logoImgUrlLight?: string | null
          primaryColor?: string | null
          siteId: string
        }
        Update: {
          createdAt?: string
          faviconUrl?: string | null
          layout?: string | null
          logoImgUrlDark?: string | null
          logoImgUrlLight?: string | null
          primaryColor?: string | null
          siteId?: string
        }
        Relationships: [
          {
            foreignKeyName: "SiteCustomization_siteId_fkey"
            columns: ["siteId"]
            referencedRelation: "Site"
            referencedColumns: ["siteId"]
          }
        ]
      }
      Subscription: {
        Row: {
          createdAt: string
          email: string | null
          endsAt: string | null
          itemId: string | null
          orderId: string | null
          orgId: string
          productId: string
          provider: Database["public"]["Enums"]["PaymentProvider"]
          quantity: number
          status: Database["public"]["Enums"]["SubscriptionStatus"]
          subscriptionId: string
          variantId: string
          variantName: string | null
        }
        Insert: {
          createdAt?: string
          email?: string | null
          endsAt?: string | null
          itemId?: string | null
          orderId?: string | null
          orgId: string
          productId: string
          provider?: Database["public"]["Enums"]["PaymentProvider"]
          quantity?: number
          status: Database["public"]["Enums"]["SubscriptionStatus"]
          subscriptionId: string
          variantId: string
          variantName?: string | null
        }
        Update: {
          createdAt?: string
          email?: string | null
          endsAt?: string | null
          itemId?: string | null
          orderId?: string | null
          orgId?: string
          productId?: string
          provider?: Database["public"]["Enums"]["PaymentProvider"]
          quantity?: number
          status?: Database["public"]["Enums"]["SubscriptionStatus"]
          subscriptionId?: string
          variantId?: string
          variantName?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Subscription_orgId_fkey"
            columns: ["orgId"]
            referencedRelation: "Org"
            referencedColumns: ["orgId"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      ivfflathandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      vector_avg: {
        Args: {
          "": number[]
        }
        Returns: string
      }
      vector_dims: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_norm: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_out: {
        Args: {
          "": string
        }
        Returns: unknown
      }
      vector_send: {
        Args: {
          "": string
        }
        Returns: string
      }
      vector_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
    }
    Enums: {
      DomainType: "customDomain" | "internalDomain"
      GithubAccountType: "USER" | "ORGANIZATION"
      installationStatus: "suspended" | "active"
      PaymentProvider: "stripe" | "lemonsqueezy"
      SubscriptionStatus:
        | "on_trial"
        | "active"
        | "paused"
        | "past_due"
        | "unpaid"
        | "cancelled"
        | "expired"
      UserRole: "ADMIN" | "MEMBER" | "GUEST"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

