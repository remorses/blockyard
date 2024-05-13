import type { ColumnType } from "kysely";

export type AuthAalLevel = "aal1" | "aal2" | "aal3";

export type AuthCodeChallengeMethod = "plain" | "s256";

export type AuthFactorStatus = "unverified" | "verified";

export type AuthFactorType = "totp" | "webauthn";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Int8 = ColumnType<string, bigint | number | string, bigint | number | string>;

export type Json = ColumnType<JsonValue, string, string>;

export type JsonArray = JsonValue[];

export type JsonObject = {
  [K in string]?: JsonValue;
};

export type JsonPrimitive = boolean | number | string | null;

export type JsonValue = JsonArray | JsonObject | JsonPrimitive;

export type Numeric = ColumnType<string, number | string, number | string>;

export type PgsodiumKeyStatus = "default" | "expired" | "invalid" | "valid";

export type PgsodiumKeyType = "aead-det" | "aead-ietf" | "auth" | "generichash" | "hmacsha256" | "hmacsha512" | "kdf" | "secretbox" | "secretstream" | "shorthash" | "stream_xchacha20";

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface AuthAuditLogEntries {
  created_at: Timestamp | null;
  id: string;
  instance_id: string | null;
  ip_address: Generated<string>;
  payload: Json | null;
}

export interface AuthFlowState {
  auth_code: string;
  authentication_method: string;
  code_challenge: string;
  code_challenge_method: AuthCodeChallengeMethod;
  created_at: Timestamp | null;
  id: string;
  provider_access_token: string | null;
  provider_refresh_token: string | null;
  provider_type: string;
  updated_at: Timestamp | null;
  user_id: string | null;
}

export interface AuthIdentities {
  created_at: Timestamp | null;
  email: Generated<string | null>;
  id: Generated<string>;
  identity_data: Json;
  last_sign_in_at: Timestamp | null;
  provider: string;
  provider_id: string;
  updated_at: Timestamp | null;
  user_id: string;
}

export interface AuthInstances {
  created_at: Timestamp | null;
  id: string;
  raw_base_config: string | null;
  updated_at: Timestamp | null;
  uuid: string | null;
}

export interface AuthMfaAmrClaims {
  authentication_method: string;
  created_at: Timestamp;
  id: string;
  session_id: string;
  sessionsId: string | null;
  updated_at: Timestamp;
}

export interface AuthMfaChallenges {
  created_at: Timestamp;
  factor_id: string;
  id: string;
  ip_address: string;
  verified_at: Timestamp | null;
}

export interface AuthMfaFactors {
  created_at: Timestamp;
  factor_type: AuthFactorType;
  friendly_name: string | null;
  id: string;
  secret: string | null;
  status: AuthFactorStatus;
  updated_at: Timestamp;
  user_id: string;
}

export interface AuthRefreshTokens {
  created_at: Timestamp | null;
  id: Generated<Int8>;
  instance_id: string | null;
  parent: string | null;
  revoked: boolean | null;
  session_id: string | null;
  token: string | null;
  updated_at: Timestamp | null;
  user_id: string | null;
}

export interface AuthSamlProviders {
  attribute_mapping: Json | null;
  created_at: Timestamp | null;
  entity_id: string;
  id: string;
  metadata_url: string | null;
  metadata_xml: string;
  sso_provider_id: string;
  updated_at: Timestamp | null;
}

export interface AuthSamlRelayStates {
  created_at: Timestamp | null;
  flow_state_id: string | null;
  for_email: string | null;
  from_ip_address: string | null;
  id: string;
  redirect_to: string | null;
  request_id: string;
  sso_provider_id: string;
  updated_at: Timestamp | null;
}

export interface AuthSchemaMigrations {
  version: string;
}

export interface AuthSessions {
  aal: AuthAalLevel | null;
  created_at: Timestamp | null;
  factor_id: string | null;
  id: string;
  ip: string | null;
  not_after: Timestamp | null;
  refreshed_at: Timestamp | null;
  tag: string | null;
  updated_at: Timestamp | null;
  user_agent: string | null;
  user_id: string;
}

export interface AuthSsoDomains {
  created_at: Timestamp | null;
  domain: string;
  id: string;
  sso_provider_id: string;
  updated_at: Timestamp | null;
}

export interface AuthSsoProviders {
  created_at: Timestamp | null;
  id: string;
  resource_id: string | null;
  updated_at: Timestamp | null;
}

export interface AuthUsers {
  aud: string | null;
  banned_until: Timestamp | null;
  confirmation_sent_at: Timestamp | null;
  confirmation_token: string | null;
  confirmed_at: Generated<Timestamp | null>;
  created_at: Timestamp | null;
  deleted_at: Timestamp | null;
  email: string | null;
  email_change: string | null;
  email_change_confirm_status: Generated<number | null>;
  email_change_sent_at: Timestamp | null;
  email_change_token_current: Generated<string | null>;
  email_change_token_new: string | null;
  email_confirmed_at: Timestamp | null;
  encrypted_password: string | null;
  id: string;
  instance_id: string | null;
  invited_at: Timestamp | null;
  is_sso_user: Generated<boolean>;
  is_super_admin: boolean | null;
  last_sign_in_at: Timestamp | null;
  phone: Generated<string | null>;
  phone_change: Generated<string | null>;
  phone_change_sent_at: Timestamp | null;
  phone_change_token: Generated<string | null>;
  phone_confirmed_at: Timestamp | null;
  raw_app_meta_data: Json | null;
  raw_user_meta_data: Json | null;
  reauthentication_sent_at: Timestamp | null;
  reauthentication_token: Generated<string | null>;
  recovery_sent_at: Timestamp | null;
  recovery_token: string | null;
  role: string | null;
  updated_at: Timestamp | null;
}

export interface Domain {
  createdAt: Generated<Timestamp>;
  domainType: "customDomain" | "internalDomain";
  host: string;
  id: string;
  siteId: string;
}

export interface ExtensionsPgStatStatements {
  blk_read_time: number | null;
  blk_write_time: number | null;
  calls: Int8 | null;
  dbid: number | null;
  jit_emission_count: Int8 | null;
  jit_emission_time: number | null;
  jit_functions: Int8 | null;
  jit_generation_time: number | null;
  jit_inlining_count: Int8 | null;
  jit_inlining_time: number | null;
  jit_optimization_count: Int8 | null;
  jit_optimization_time: number | null;
  local_blks_dirtied: Int8 | null;
  local_blks_hit: Int8 | null;
  local_blks_read: Int8 | null;
  local_blks_written: Int8 | null;
  max_exec_time: number | null;
  max_plan_time: number | null;
  mean_exec_time: number | null;
  mean_plan_time: number | null;
  min_exec_time: number | null;
  min_plan_time: number | null;
  plans: Int8 | null;
  query: string | null;
  queryid: Int8 | null;
  rows: Int8 | null;
  shared_blks_dirtied: Int8 | null;
  shared_blks_hit: Int8 | null;
  shared_blks_read: Int8 | null;
  shared_blks_written: Int8 | null;
  stddev_exec_time: number | null;
  stddev_plan_time: number | null;
  temp_blk_read_time: number | null;
  temp_blk_write_time: number | null;
  temp_blks_read: Int8 | null;
  temp_blks_written: Int8 | null;
  toplevel: boolean | null;
  total_exec_time: number | null;
  total_plan_time: number | null;
  userid: number | null;
  wal_bytes: Numeric | null;
  wal_fpi: Int8 | null;
  wal_records: Int8 | null;
}

export interface ExtensionsPgStatStatementsInfo {
  dealloc: Int8 | null;
  stats_reset: Timestamp | null;
}

export interface Generation {
  chars: number;
  createdAt: Generated<Timestamp>;
  id: Generated<number>;
  orgId: string;
  words: number;
}

export interface GithubForUser {
  accountLogin: string;
  avatarUrl: string | null;
  clientId: string;
  company: string | null;
  email: string | null;
  name: string | null;
  oauthToken: string;
  userId: string;
}

export interface GithubInstallation {
  accountAvatarUrl: Generated<string>;
  accountLogin: Generated<string>;
  accountType: Generated<"ORGANIZATION" | "USER">;
  appId: string | null;
  createdAt: Generated<Timestamp>;
  installationId: number;
  oauthToken: string | null;
  orgId: string;
  status: Generated<"active" | "suspended">;
}

export interface GithubIntegration {
  defaultBranchName: string | null;
  githubRepoId: string;
  installationId: number;
  orgId: string | null;
  owner: string;
  repo: string;
  siteId: string;
}

export interface NetHttpRequestQueue {
  body: Buffer | null;
  headers: Json;
  id: Generated<Int8>;
  method: string;
  timeout_milliseconds: number;
  url: string;
}

export interface NetHttpResponse {
  content: string | null;
  content_type: string | null;
  created: Generated<Timestamp>;
  error_msg: string | null;
  headers: Json | null;
  id: Int8 | null;
  status_code: number | null;
  timed_out: boolean | null;
}

export interface Org {
  createdAt: Generated<Timestamp>;
  name: Generated<string>;
  orgId: string;
  ssoProviderId: string | null;
  stripeCustomerId: string | null;
  updatedAt: Generated<Timestamp>;
}

export interface OrgInviteLink {
  createdAt: Generated<Timestamp>;
  forPageId: string | null;
  forSiteId: string | null;
  key: string;
  orgId: string;
}

export interface OrgsUsers {
  guestSiteIds: string[] | null;
  orgId: string;
  role: Generated<"ADMIN" | "GUEST" | "MEMBER">;
  userId: string;
}

export interface Page {
  branchId: string;
  createdAt: Generated<Timestamp>;
  document: Buffer | null;
  lastUpdatedFrom: string | null;
  markdown: Generated<string>;
  pageId: string;
  siteId: string;
  slug: string;
  updatedAt: Timestamp;
}

export interface PaymentForCredits {
  createdAt: Generated<Timestamp>;
  email: string | null;
  id: string;
  orderId: string;
  orgId: string;
  productId: string;
  subscriptionId: string | null;
  variantId: string;
  variantName: string | null;
}

export interface PgsodiumDecryptedKey {
  associated_data: string | null;
  comment: string | null;
  created: Timestamp | null;
  decrypted_raw_key: Buffer | null;
  expires: Timestamp | null;
  id: string | null;
  key_context: Buffer | null;
  key_id: Int8 | null;
  key_type: PgsodiumKeyType | null;
  name: string | null;
  parent_key: string | null;
  raw_key: Buffer | null;
  raw_key_nonce: Buffer | null;
  status: PgsodiumKeyStatus | null;
}

export interface PgsodiumKey {
  associated_data: Generated<string | null>;
  comment: string | null;
  created: Generated<Timestamp>;
  expires: Timestamp | null;
  id: Generated<string>;
  key_context: Generated<Buffer | null>;
  key_id: Generated<Int8 | null>;
  key_type: PgsodiumKeyType | null;
  name: string | null;
  parent_key: string | null;
  raw_key: Buffer | null;
  raw_key_nonce: Buffer | null;
  status: Generated<PgsodiumKeyStatus | null>;
  user_data: string | null;
}

export interface PgsodiumMaskColumns {
  associated_columns: string | null;
  attname: string | null;
  attrelid: number | null;
  format_type: string | null;
  key_id: string | null;
  key_id_column: string | null;
  nonce_column: string | null;
}

export interface PgsodiumMaskingRule {
  associated_columns: string | null;
  attname: string | null;
  attnum: number | null;
  attrelid: number | null;
  col_description: string | null;
  format_type: string | null;
  key_id: string | null;
  key_id_column: string | null;
  nonce_column: string | null;
  priority: number | null;
  relname: string | null;
  relnamespace: string | null;
  security_invoker: boolean | null;
  view_name: string | null;
}

export interface PgsodiumValidKey {
  associated_data: string | null;
  created: Timestamp | null;
  expires: Timestamp | null;
  id: string | null;
  key_context: Buffer | null;
  key_id: Int8 | null;
  key_type: PgsodiumKeyType | null;
  name: string | null;
  status: PgsodiumKeyStatus | null;
}

export interface RealtimeChannels {
  check: Generated<boolean | null>;
  id: Generated<Int8>;
  inserted_at: Timestamp;
  name: string;
  updated_at: Timestamp;
}

export interface RealtimeSchemaMigrations {
  inserted_at: Timestamp | null;
  version: Int8;
}

export interface RealtimeSubscription {
  claims: Json;
  claims_role: Generated<string>;
  created_at: Generated<Timestamp>;
  entity: string;
  filters: Generated<string[]>;
  id: Generated<Int8>;
  subscription_id: string;
}

export interface Site {
  createdAt: Generated<Timestamp>;
  installationId: number | null;
  name: string;
  orgId: string;
  siteId: string;
}

export interface SiteBranch {
  basePath: string | null;
  branchId: string;
  createdAt: Generated<Timestamp>;
  githubBranchName: string | null;
  pagesTree: Json;
  siteId: string;
}

export interface SiteCustomization {
  createdAt: Generated<Timestamp>;
  faviconUrl: string | null;
  layout: Generated<string | null>;
  logoImgUrlDark: string | null;
  logoImgUrlLight: string | null;
  primaryColor: string | null;
  siteId: string;
}

export interface StorageBuckets {
  allowed_mime_types: string[] | null;
  avif_autodetection: Generated<boolean | null>;
  created_at: Generated<Timestamp | null>;
  file_size_limit: Int8 | null;
  id: string;
  name: string;
  owner: string | null;
  owner_id: string | null;
  public: Generated<boolean | null>;
  updated_at: Generated<Timestamp | null>;
}

export interface StorageMigrations {
  executed_at: Generated<Timestamp | null>;
  hash: string;
  id: number;
  name: string;
}

export interface StorageObjects {
  bucket_id: string | null;
  created_at: Generated<Timestamp | null>;
  id: Generated<string>;
  last_accessed_at: Generated<Timestamp | null>;
  metadata: Json | null;
  name: string | null;
  owner: string | null;
  owner_id: string | null;
  path_tokens: Generated<string[] | null>;
  updated_at: Generated<Timestamp | null>;
  version: string | null;
}

export interface Subscription {
  createdAt: Generated<Timestamp>;
  email: string | null;
  endsAt: Timestamp | null;
  itemId: string | null;
  orderId: string | null;
  orgId: string;
  productId: string;
  provider: Generated<"lemonsqueezy" | "stripe">;
  quantity: Generated<number>;
  status: "active" | "cancelled" | "expired" | "on_trial" | "past_due" | "paused" | "unpaid";
  subscriptionId: string;
  variantId: string;
  variantName: string | null;
}

export interface SupabaseFunctionsHooks {
  created_at: Generated<Timestamp>;
  hook_name: string;
  hook_table_id: number;
  id: Generated<Int8>;
  request_id: Int8 | null;
}

export interface SupabaseFunctionsMigrations {
  inserted_at: Generated<Timestamp>;
  version: string;
}

export interface SupabaseMigrationsSchemaMigrations {
  name: string | null;
  statements: string[] | null;
  version: string;
}

export interface VaultDecryptedSecrets {
  created_at: Timestamp | null;
  decrypted_secret: string | null;
  description: string | null;
  id: string | null;
  key_id: string | null;
  name: string | null;
  nonce: Buffer | null;
  secret: string | null;
  updated_at: Timestamp | null;
}

export interface VaultSecrets {
  created_at: Generated<Timestamp>;
  description: Generated<string>;
  id: Generated<string>;
  key_id: Generated<string | null>;
  name: string | null;
  nonce: Generated<Buffer | null>;
  secret: string;
  updated_at: Generated<Timestamp>;
}

export interface VectorsEmbeddings {
  attributes: Json;
  embedding: string | null;
  id: string;
  namespace: string;
}

export interface DB {
  "auth.audit_log_entries": AuthAuditLogEntries;
  "auth.flow_state": AuthFlowState;
  "auth.identities": AuthIdentities;
  "auth.instances": AuthInstances;
  "auth.mfa_amr_claims": AuthMfaAmrClaims;
  "auth.mfa_challenges": AuthMfaChallenges;
  "auth.mfa_factors": AuthMfaFactors;
  "auth.refresh_tokens": AuthRefreshTokens;
  "auth.saml_providers": AuthSamlProviders;
  "auth.saml_relay_states": AuthSamlRelayStates;
  "auth.schema_migrations": AuthSchemaMigrations;
  "auth.sessions": AuthSessions;
  "auth.sso_domains": AuthSsoDomains;
  "auth.sso_providers": AuthSsoProviders;
  "auth.users": AuthUsers;
  Domain: Domain;
  "extensions.pg_stat_statements": ExtensionsPgStatStatements;
  "extensions.pg_stat_statements_info": ExtensionsPgStatStatementsInfo;
  Generation: Generation;
  GithubForUser: GithubForUser;
  GithubInstallation: GithubInstallation;
  GithubIntegration: GithubIntegration;
  "net._http_response": NetHttpResponse;
  "net.http_request_queue": NetHttpRequestQueue;
  Org: Org;
  OrgInviteLink: OrgInviteLink;
  OrgsUsers: OrgsUsers;
  Page: Page;
  PaymentForCredits: PaymentForCredits;
  "pgsodium.decrypted_key": PgsodiumDecryptedKey;
  "pgsodium.key": PgsodiumKey;
  "pgsodium.mask_columns": PgsodiumMaskColumns;
  "pgsodium.masking_rule": PgsodiumMaskingRule;
  "pgsodium.valid_key": PgsodiumValidKey;
  "realtime.channels": RealtimeChannels;
  "realtime.schema_migrations": RealtimeSchemaMigrations;
  "realtime.subscription": RealtimeSubscription;
  Site: Site;
  SiteBranch: SiteBranch;
  SiteCustomization: SiteCustomization;
  "storage.buckets": StorageBuckets;
  "storage.migrations": StorageMigrations;
  "storage.objects": StorageObjects;
  Subscription: Subscription;
  "supabase_functions.hooks": SupabaseFunctionsHooks;
  "supabase_functions.migrations": SupabaseFunctionsMigrations;
  "supabase_migrations.schema_migrations": SupabaseMigrationsSchemaMigrations;
  "vault.decrypted_secrets": VaultDecryptedSecrets;
  "vault.secrets": VaultSecrets;
  "vectors.embeddings": VectorsEmbeddings;
}
