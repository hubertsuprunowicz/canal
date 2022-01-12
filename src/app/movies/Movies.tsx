import React from 'react';
import { Layout } from 'components';
import Header from './Header';
import Content from './Content';

export const Movies: React.FC = () => {
  return (
    <Layout data-testid="movies-layout">
      <Header />
      <Content />
    </Layout>
  );
};

