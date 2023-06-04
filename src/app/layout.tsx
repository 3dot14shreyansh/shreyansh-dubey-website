import '@/styles/globals.css';

export const metadata = {
  title: 'Shreyansh Dubey - Data Science Enthusiast | Road Safety',
  description: `"I'm a passionate data science enthusiast. Explore my expertise in coding, libraries such as sklearn, spacy, numpy, nltk, pandas, seaborn, opencv, keras, and tensorflow. Discover my dedication to promoting road safety for a safer community.`,
  keywords: `data enthusiast, problem-solving, simplicity, code writer, sklearn, spacy, numpy, nltk, pandas, matplotlib, seaborn, opencv, keras, tensorflow, road safety advocate`
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
