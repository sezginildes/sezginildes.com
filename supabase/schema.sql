-- Supabase SQL Editor içinde bir kez çalıştırın.
-- E-posta adresleri kişisel veridir: yalnızca açık onayla kaydedilir.

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  kvkk_consent boolean not null default false,
  source text not null default 'website',
  created_at timestamptz not null default now(),
  unsubscribed_at timestamptz
);

alter table public.subscribers enable row level security;

-- Kayıtlar yalnızca Vercel'deki sunucu anahtarıyla yazılır; tarayıcıdan doğrudan erişim yoktur.
