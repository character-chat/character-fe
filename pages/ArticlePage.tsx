// import axios from 'axios';
// import cheerio from 'cheerio';
// import { GetServerSideProps } from 'next';

// export const getServerSideProps: GetServerSideProps = async () => {
//   const url = 'https://mp.weixin.qq.com/s/Mhg9lQqH-jsLMGgp952qlw';
//   const { data } = await axios.get(url);
//   const $ = cheerio.load(data);
//   const title = $('#activity-name').text().trim();
//   const content = $('#js_content').text().trim();

//   return { props: { title, content } };
// };

// const ArticlePage = ({ title, content }) => (
//   <div>
//     <h1>{title}</h1>
//     <p>{content}</p>
//   </div>
// );

// export default ArticlePage;
