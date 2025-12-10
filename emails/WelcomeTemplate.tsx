import React from 'react'
import { Html, Body, Container, Tailwind, Text, Link, Preview } from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
    return (
        <Html>
            <Preview>Welcome Aboard!</Preview>
            <Tailwind>
                <Body className='font-semibold'>
                    <Container>
                        <Text className='text-3xl font-bold'>Hello {name}</Text>
                        <Link href='https://github.com/hussainislive'>hussainislive</Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default WelcomeTemplate