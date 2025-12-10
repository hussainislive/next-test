'use client';
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {

    const [publicId, setPublicId] = useState('')

    return (
        <>
            {publicId && <CldImage src={publicId} width={270} height={180} alt='hussain image' />}
            <CldUploadWidget
                uploadPreset='kjkszpj'
                options={{
                    sources: ['local', 'url']
                }}
                onSuccess={(result, { widget }) => {
                    if (result.event !== 'success') return
                    const info = result.info as CloudinaryResult;
                    setPublicId(info.public_id)
                }}
                onError={(error, { widget }) => {
                    console.error('Upload error:', error);
                }}>
                {({ open }) => <button
                    className='btn btn-primary bg-cyan-500 px-5 py-2 text-white rounded'
                    onClick={() => open()}
                >Upload</button>}
            </CldUploadWidget>
        </>
    )
}

export default UploadPage