import '@/styles/globals.css';

export const metadata = {
  title: 'Shreyansh Dubey - Data Science Enthusiast | Road Safety',
  description: `Data enthusiast & code writer passionate about problem-solving. Striving for simplicity & intuitive solutions. Promoting road safety for a safer community.`,
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
