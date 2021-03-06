import { objectType } from 'nexus'
import { generateSchemaAndTypes } from './__utils'

it('in dev stage, warns when wrong projected field or crud', async () => {
  process.env.NODE_ENV = 'development'

  const datamodel = `
  model User {
    id  Int @id
    username String
  }
`

  const User = objectType({
    name: 'User',
    definition(t: any) {
      t.model.id()
      t.model.userName() // wrong projected field
    },
  })

  const Query = objectType({
    name: 'Query',
    definition(t: any) {
      t.crud.userss({ filtering: true }) // wrong crud field
    },
  })

  let outputData = ''
  const storeLog = (inputs: string) => (outputData += '\n' + inputs)
  console.log = jest.fn(storeLog)

  await generateSchemaAndTypes(datamodel, [Query, User])

  expect(outputData).toMatchInlineSnapshot(`
    "
    Warning: t.crud.userss() is not a valid CRUD field given your Prisma Schema.
    Warning: t.model.userName() does not map to a field in your Prisma Schema."
  `)
})

it('in undefined stages, warns when wrong projected field or crud', async () => {
  delete process.env.NODE_ENV

  const datamodel = `
  model User {
    id  Int @id
    username String
  }
`

  const User = objectType({
    name: 'User',
    definition(t: any) {
      t.model.id()
      t.model.userName() // wrong projected field
    },
  })

  const Query = objectType({
    name: 'Query',
    definition(t: any) {
      t.crud.userss({ filtering: true }) // wrong crud field
    },
  })

  let outputData = ''
  const storeLog = (inputs: string) => (outputData += '\n' + inputs)
  console.log = jest.fn(storeLog)

  await generateSchemaAndTypes(datamodel, [Query, User])

  expect(outputData).toMatchInlineSnapshot(`
    "
    Warning: t.crud.userss() is not a valid CRUD field given your Prisma Schema.
    Warning: t.model.userName() does not map to a field in your Prisma Schema."
  `)
})

it('in other stages, throws error when wrong projected field or crud', async () => {
  process.env.NODE_ENV = 'production'

  const datamodel = `
  model User {
    id  Int @id
    username String
  }
`

  const User = objectType({
    name: 'User',
    definition(t: any) {
      t.model.id()
      t.model.userName() // wrong projected field
    },
  })

  const Query = objectType({
    name: 'Query',
    definition(t: any) {
      t.crud.userss({ filtering: true }) // wrong crud field
    },
  })

  let outputData = ''
  const storeLog = (inputs: string) => (outputData += '\n' + inputs)
  console.log = jest.fn(storeLog)

  expect(
    generateSchemaAndTypes(datamodel, [Query, User]),
  ).rejects.toThrowErrorMatchingSnapshot()
})
