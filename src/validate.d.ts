export default function validateSchema <T extends Object>(
    obj: T,
    schema: string|T,
    options?: ValidationOptions
):void;

type ValidationOptions = {
    ignore: string[]
}