import React from 'react';
import Link from 'next/link';

function Page() {
  return (
    <div style={styles.container}>
      <p>Page unavailable</p>
      <Link href="/Menu">Go to Menu</Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
    textAlign: 'center', 
  },
};

export default Page;
