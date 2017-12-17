export default class TimeLine {
    public ms: number = 0;

    tick(ms: number) {
        this.ms += ms;
    }
}