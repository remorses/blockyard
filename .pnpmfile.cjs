let enforceSingleVersion = [
    'react-hot-toast', //
    'react',
    // '@types/react',
    'react-dom',
    'next-auth',
    'next',
    'date-fns',
    'styled-jsx',
    'next-themes',
    'nprogress',
    'tailwindcss',
    // '@chakra-ui/react',
    '@headlessui/react',
    '@voxelize/core',

    // 'html-dom-parser',
]

// enforceSingleVersion = []

function afterAllResolved(lockfile, context) {
    console.log()
    const packagesKeys = Object.keys(lockfile.packages)
    const found = {}
    for (let p of packagesKeys) {
        // if (p.startsWith('@voxelize/')) {
        //     const pack = lockfile.packages[p]
        //     console.log(p, pack)
        //     if (!pack.version.startsWith('link:')) {
        //         throw new Error(
        //             `@voxelize/* packages should be linked, found ${pack.version} for ${p}`,
        //         )
        //     }
        // }

        for (let x of enforceSingleVersion) {
            if (p.startsWith(x + '@')) {
                if (found[x]) {
                    found[x] += 1
                } else {
                    found[x] = 1
                }
            }
        }
    }
    let msg = ''
    for (let p in found) {
        const count = found[p]
        if (count && count > 1) {
            msg += `${p} found ${count} times\n`
            msg += explainProblemInDuplicateDep(p, lockfile)
        }
    }
    if (msg) {
        throw new Error(msg)
    }
    return lockfile
}

function explainProblemInDuplicateDep(pkg, lockfile) {
    const packagesKeys = Object.keys(lockfile.packages)
    let found = {}
    for (let p of packagesKeys) {
        if (p.startsWith(pkg + '@')) {
            const config = lockfile.packages[p]
            found[p] = Object.keys(config.dependencies || {}).concat(
                Object.keys(config.deerDependencies || {}),
            )
        }
    }

    const differences = getDifferences(Object.values(found))

    if (differences.length) {
        return `${pkg} has different set of dependencies:\n${JSON.stringify(
            differences,
            null,
            2,
        )}`
    }
    return ''
}

// return different items from a list of arrays of strings
function getDifferences(arrays) {
    const result = {}
    for (let a of arrays) {
        for (let x of a) {
            if (result[x]) {
                result[x] += 1
            } else {
                result[x] = 1
            }
        }
    }
    for (let x in result) {
        if (result[x] === arrays.length) {
            delete result[x]
        }
    }
    return Object.keys(result).filter(Boolean)
}

module.exports = {
    hooks: {
        afterAllResolved,
    },
}
