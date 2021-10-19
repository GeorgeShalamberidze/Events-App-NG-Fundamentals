import { FormControl } from "@angular/forms"

export const restrictedWords = (words: any) => {
    return (control: FormControl): {[key: string]: any} => {
        if (!words) {
            return null!
        }
        var invalidWords = words.map((wr: string[]) => control.value.includes(wr) ? wr : null).filter((b: string) => b != null)
        return invalidWords && invalidWords.length > 0 ? {"restrictedWords": invalidWords.join(', ')} : null!
    }
}