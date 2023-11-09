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
      Follow: {
        Row: {
          created_at: string
          following_id: number
          user_id: number
        }
        Insert: {
          created_at?: string
          following_id: number
          user_id: number
        }
        Update: {
          created_at?: string
          following_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Follow_following_id_fkey"
            columns: ["following_id"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Follow_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      Hashtag: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name?: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      Tweet: {
        Row: {
          answer_to_id: number | null
          created_at: string
          id: number
          text: string
          user_id: number
        }
        Insert: {
          answer_to_id?: number | null
          created_at?: string
          id?: number
          text: string
          user_id?: number | null
        }
        Update: {
          answer_to_id?: number | null
          created_at?: string
          id?: number
          text?: string
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Tweet_answer_to_id_fkey"
            columns: ["answer_to_id"]
            isOneToOne: false
            referencedRelation: "Tweet"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Tweet_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      TweetHashtag: {
        Row: {
          hashtag_id: number
          tweet_id: number
        }
        Insert: {
          hashtag_id: number
          tweet_id: number
        }
        Update: {
          hashtag_id?: number
          tweet_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "TweetHashtag_hashtag_id_fkey"
            columns: ["hashtag_id"]
            isOneToOne: false
            referencedRelation: "Hashtag"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "TweetHashtag_tweet_id_fkey"
            columns: ["tweet_id"]
            isOneToOne: false
            referencedRelation: "Tweet"
            referencedColumns: ["id"]
          }
        ]
      }
      User: {
        Row: {
          avatar_path: string
          birthday: string
          created_at: string
          email: string
          id: number
          name: string
          passhash: string
          twitter_name: string
        }
        Insert: {
          avatar_path: string
          birthday: string
          created_at: string
          email?: string
          id?: number
          name?: string
          passhash: string
          twitter_name?: string
        }
        Update: {
          avatar_path?: string
          birthday?: string
          created_at?: string
          email?: string
          id?: number
          name?: string
          passhash?: string
          twitter_name?: string
        }
        Relationships: []
      }
      UserTweet: {
        Row: {
          created_at: string
          liked: boolean | null
          retweeted: boolean | null
          saved: boolean | null
          tweet_id: number
          user_id: number
        }
        Insert: {
          created_at?: string
          liked?: boolean | null
          retweeted?: boolean | null
          saved?: boolean | null
          tweet_id: number
          user_id: number
        }
        Update: {
          created_at?: string
          liked?: boolean | null
          retweeted?: boolean | null
          saved?: boolean | null
          tweet_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "UserTweet_tweet_id_fkey"
            columns: ["tweet_id"]
            isOneToOne: false
            referencedRelation: "Tweet"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "UserTweet_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
