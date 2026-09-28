# Definition provenance

This SDK is generated from the official Cloudflare OpenAPI definition.

- Upstream repository: https://github.com/cloudflare/api-schemas
- Upstream file: `openapi.json`
- Upstream commit: [`d9edc9e601cc940449da424bf35a69d863e103af`](https://github.com/cloudflare/api-schemas/commit/d9edc9e601cc940449da424bf35a69d863e103af)
- Retrieved: 2026-09-28
- Upstream SHA-256: `7cd298669e3ca59c52fa76eac9a8b377535b993cffa4c6131296e2ed268a94c6`
- Product: Cloudflare Application Delivery
- Product slice: 39 paths, 79 operations, 175 transitively referenced schemas
- Product-spec SHA-256: `6e66b1ea0207d9de8ee1fcdace358ef6d6643582424fb571d5a1ace12b322a0e`

Cloudflare publishes one monolithic definition spanning many independent products.
This repository covers the named product surface. Together, the 34 Cloudflare
SDK repositories cover all 2,260 paths and 3,605 operations in the source
definition exactly once. The split is reproducible with
`voxgig-sdk/admin/scripts/cloudflare-split.py`; it retains every transitively
referenced component and rejects gaps or overlapping ownership.
