## nextjs.Stifler

Stifler is viewer for Caddy logs.\
Caddy 2 is a powerful, enterprise-ready, open source web server with automatic HTTPS. 

**How enable Caddy logs ?**

`https://caddyserver.com/docs/caddyfile/directives/log`
- Open Caddy config file (default /etc/caddy/Caddyfile)
- Enable log:
```
domain {
    ****
    log {
        output file /var/log/caddy/domain.log
        format json
    }
}
```