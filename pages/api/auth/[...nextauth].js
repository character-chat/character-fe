// import NextAuth from 'next-auth'
// import Providers from 'next-auth/providers'
// import axios from 'axios'

// export default NextAuth({
//   providers: [
//     Providers.Credentials({
//       name: 'WeChat',
//       credentials: {},
//       authorize: async (credentials) => {
//         const { code } = credentials;

//         // 使用 code 获取 access_token
//         const accessTokenResponse = await axios.get(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=YOUR_APP_ID&secret=YOUR_APP_SECRET&code=${code}&grant_type=authorization_code`);

//         const { access_token, openid } = accessTokenResponse.data;

//         if (!access_token) {
//           return null;
//         }

//         // 使用 access_token 和 openid 获取用户信息
//         const userInfoResponse = await axios.get(`https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${openid}`);

//         const user = userInfoResponse.data;

//         if (user) {
//           return { id: user.openid, name: user.nickname, email: user.openid + '@wechat.com', image: user.headimgurl };
//         } else {
//           return null;
//         }
//       }
//     })
//   ]
// });
