import Showdown from 'showdown'

export class MdConverter {
    private converter: Showdown.Converter 

    constructor() {
        this.converter = new Showdown.Converter()
        this.converter.setFlavor('github')
    }

    convert(md: string): string {
        return this.converter.makeHtml(md)
    }
}