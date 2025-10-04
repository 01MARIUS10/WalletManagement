CREATE TABLE users (
  id TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT NOT NULL,
  avatar_url TEXT NULL,
  created_at TIMESTAMP WITH TIME ZONE NULL DEFAULT NOW(),
  manager_id TEXT NULL,
  balance_wallet INTEGER NULL DEFAULT 0,
  balance_unit TEXT NULL DEFAULT 'MGA'::TEXT,
  default_currency TEXT NULL DEFAULT 'EUR'::TEXT,
  locale TEXT NULL DEFAULT 'fr-FR'::TEXT,
  weekly_budget_limit INTEGER NULL,
  notifications_email BOOLEAN NULL DEFAULT FALSE,
  notifications_push BOOLEAN NULL DEFAULT FALSE,
  CONSTRAINT users_pkey PRIMARY KEY (id),
  CONSTRAINT users_email_key UNIQUE (email),
  CONSTRAINT users_manager_id_fkey FOREIGN KEY (manager_id) REFERENCES public.users (id)
) TABLESPACE pg_default;