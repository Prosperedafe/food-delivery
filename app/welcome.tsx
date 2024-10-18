import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { welcome } from '@/styles/welcome';
import { colors } from '@/styles/colors';
import { SocialSignIn } from '@/components/auth/SocialSignin';
import { Link } from 'expo-router';

const Welcome = () => {

    return (
        <View style={welcome.page}>
            <Image style={welcome.bgImg} source={require('@/assets/images/welcome-bg.png')} />
            <View style={welcome.wrapper}>
                <View>
                    <Text style={welcome.heading}>Welcome to {"\n"}<Text style={{ color: colors.primary }}>Food Hub</Text></Text>
                    <Text style={welcome.title}>Your favourite foods delivered fast at your door.</Text>
                </View>
                <View>
                    <SocialSignIn
                        color='#fff'
                        line='#FFFFFF80'
                        text='sign in with'
                    />
                    <Link href='/signup'
                        style={{
                            backgroundColor: 'hsla(0, 0%, 100%, 0.21)',
                            borderRadius: 30,
                            borderWidth: 1,
                            borderColor: '#fff',
                            padding: 13,
                            maxWidth: 330,
                            width: '100%',
                            color: '#fff',
                            fontSize: 17,
                            fontWeight: '500',
                            textAlign: 'center'
                        }}
                    >Start with email or phone</Link>
                    <Text style={{
                        fontSize: 16,
                        color: '#fff',
                        textAlign: 'center',
                        marginTop: 18
                    }}>Already have an account? <Link style={{ textDecorationLine: 'underline' }} href='/login'>Sign In</Link>
                    </Text>
                </View>
            </View>
            <LinearGradient style={welcome.gradient} colors={['hsla(231, 15%, 34%, .05)', '#191B2F']}></LinearGradient>
        </View>
    );
};

export default Welcome;