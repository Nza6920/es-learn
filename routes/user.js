import Router from 'koa-router'

const router = new Router()

router.prefix('/')

router.get('/', async ctx => {
  await ctx.render('index')
})

router.get('/add', async ctx => {
  await ctx.render('index')
})

router.get('/test', async ctx => {
  ctx.body = {
    code: 0
  }
})

export default router
