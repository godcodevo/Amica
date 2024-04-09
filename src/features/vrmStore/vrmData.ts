export class VrmData{
    public url: string;
    public thumbUrl: string;
    private hash: string;

    constructor(hash:string, url: string, thumbUrl?: string) {
        this.url = url;
        this.thumbUrl = thumbUrl ?? "";
        this.hash = hash;
    }

    public hashEquals(hash: string) {
        return (this.hash == hash);
    }

    public getHash(): string {
        return this.hash;
    }
};