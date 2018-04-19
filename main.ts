export namespace loop.object {
    export interface Generic {
        [key: string]: any
    }

    export function find(
        value: Generic,
        ...path: Array<string>
    ) {
        if (!path.length)
            return value

        let current = value
        
        while (path.length) {
            var key = <string>path.shift()
            if (!current[key])
                throw `Chave '${key}' não encontrada!`
            current = current[key]
        }

        return current
    }
}