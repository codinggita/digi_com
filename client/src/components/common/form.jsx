

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button"; // Ensure this is correctly imported

function CommonForm({ formControls, formData, setFormData, onSubmit, buttonText }) { // Correct destructuring

    function renderInputByComponentType(getControlItem) {
        let element = null;
        const value = formData[getControlItem.name] || "";

        switch (getControlItem.componentType) {
            case 'input':
                element = (
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        value={value}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                [getControlItem.name]: event.target.value,
                            })
                        }
                    />
                );
                break;

            case 'select':
                element = (
                    <Select value={value} onValueChange={(val) =>
                        setFormData({
                            ...formData,
                            [getControlItem.name]: val,
                        })
                    }>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={getControlItem.label} />
                        </SelectTrigger>
                        <SelectContent>
                            {getControlItem.options?.length > 0 &&
                                getControlItem.options.map((optionItem) => (
                                    <SelectItem key={optionItem.id} value={optionItem.id}>
                                        {optionItem.label}
                                    </SelectItem>
                                ))}
                        </SelectContent>
                    </Select>
                );
                break;

            case 'textarea':
                element = (
                    <textarea
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.id}
                        value={value}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                [getControlItem.name]: event.target.value,
                            })
                        }
                        className="w-full p-2 border rounded-md"
                    />
                );
                break;

            default:
                element = (
                    <Input
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        value={value}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                [getControlItem.name]: event.target.value,
                            })
                        }
                    />
                );
                break;
        }
        return element; // Ensure element is returned
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
                {Array.isArray(formControls) ? (
                    formControls.map((controlItem) => (
                        <div className="grid w-full gap-1.5" key={controlItem.name}>
                            <Label className="mb-1">{controlItem.label}</Label>
                            {renderInputByComponentType(controlItem)}
                        </div>
                    ))
                ) : (
                    <p className="text-red-500">Invalid form controls</p>
                )}
            </div>
            <Button type="submit" className="mt-2 w-full">
                {buttonText || "Submit"}
            </Button>
        </form>
    );
}

export default CommonForm;
 