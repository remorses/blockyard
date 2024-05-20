import { expect, test } from 'vitest'
import cuid from 'cuid'
import { v4,parse } from 'uuid'
import { cuidToUUID } from '~/lib/utils'

test('uidToUUID', async ({}) => {
    
    const uid = cuidToUUID(cuid())
    console.log('uid',uid)
    parse(uid)
})
