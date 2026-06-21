// PM2 process config for the Next.js public landing page.
// Build first: `npm run build`, then `pm2 start ecosystem.config.js`.
// Runs the production server (`next start -p 3121`). After a code change,
// rebuild with `npm run build` then `pm2 restart kalori-ai-landing`.
module.exports = {
  apps: [
    {
      name: 'kalori-ai-landing',
      script: 'npm',
      args: 'start',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '300M',
      // NEXT_PUBLIC_BOT_USERNAME comes from .env (baked in at build time)
      env: {
        NODE_ENV: 'production',
      },
      restart_delay: 3000,
      out_file: 'logs/out.log',
      error_file: 'logs/error.log',
      merge_logs: true,
      time: true,
    },
  ],
};
