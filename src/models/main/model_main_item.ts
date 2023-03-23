class ModelMainItem {
    /**
     * Objects of this class are user to display and keep counter for items in list on items in ViewMain
     */
    key: number
    id: number
    author: string
    imgLarge: string
    imgSmall: string
    counter: number

    constructor(id: number, author: string, imgLarge: string, imgSmall: string) {
        this.key = Math.random()
        this.id = id
        this.author = author
        this.imgLarge = imgLarge
        this.imgSmall = imgSmall
        this.counter = 0
    }

    public incrementCounter () {
        this.counter++
        this.refreshKey()
    }

    private refreshKey() {
        this.key = Math.random()
    }

}

export {ModelMainItem}
