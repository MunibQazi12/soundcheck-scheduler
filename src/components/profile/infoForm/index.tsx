import React from 'react'
import InputLabel from './label'
import FormInput from './forminput'

const InfoForm = () => {
    return (
        <form className="mt-5">
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                <div className="w-full">
                    <InputLabel />
                    <FormInput />
                </div>
            </div>
        </form>
    )
}

export default InfoForm