package = "voxgig-sdk-cloudflare-application-delivery-sdk"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/cloudflare-application-delivery-sdk.git",
  tag = "lua/v0.0.1",
  dir = "cloudflare-application-delivery-sdk/lua"
}
description = {
  summary = "Unofficial generated Lua SDK for the Cloudflare Application Delivery public API. Not affiliated with or endorsed by the upstream API provider.",
  homepage = "https://github.com/voxgig-sdk/cloudflare-application-delivery-sdk",
  issues_url = "https://github.com/voxgig-sdk/cloudflare-application-delivery-sdk/issues",
  license = "MIT",
  labels = { "voxgig", "sdk", "generated-sdk", "openapi", "api-client", "cloudflare-application-delivery" }
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["cloudflare-application-delivery_sdk"] = "cloudflare-application-delivery_sdk.lua",
    ["config"] = "config.lua",
    ["config_shared"] = "config_shared.lua",
    ["config_plugins"] = "config_plugins.lua",
    ["schema"] = "schema.lua",
    ["features"] = "features.lua",
    ["feature.base_feature"] = "feature/base_feature.lua",
    ["feature.test_feature"] = "feature/test_feature.lua",
  }
}
