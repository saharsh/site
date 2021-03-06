import Link from 'next/link';
import Layout from '../components/Layouts/Layout';
import Post from '../components/Post';

const Home = () => (
  <Layout>
    <Post>
      <p>
        Usually <em>@saharshxyz</em> on the internet:{' '}
        <a href="https://sahar.sh/t" title="Saharsh&#39;s Twitter">
          Twitter
        </a>
        ,{' '}
        <a href="https://sahar.sh/gh" title="Saharsh&#39;s Github">
          Github
        </a>
        ,{' '}
        <a href="https://sahar.sh/ig" title="Saharsh&#39;s Intagram">
          Instagram
        </a>
        ,{' '}
        <a href="https://sahar.sh/ln" title="Saharsh&#39;s Linkedin">
          Linkedin
        </a>
        .</p><p>Email:{' '}
        <a href="mailto:hello@saharsh.xyz" title="Saharsh&#39;s Email">
          hello [at] saharsh.xyz
        </a>
      .</p>
      
    </Post>
  </Layout>
);

export default Home;
