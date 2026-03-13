const fs = require('fs');
const path = require('path');

const files = [
    {
        name: 'CII-Diploma-in-Insurance.astro',
        desc: "Expert academic support for CII Diploma in Insurance (Level 4). Professional guidance for all diploma modules including core and optional units.",
        keywords: "CII Diploma in Insurance, Level 4 Diploma help, DipCII assignment writing, CII Diploma support, M05 Insurance Law assignment, CII module help",
        title: "CII Diploma in Insurance - Level 4 Support | CII Assignment Help",
        courseName: "CII Diploma in Insurance (Level 4)",
        courseDesc: "Expert academic support and assignment writing help for the CII Diploma in Insurance (Level 4) modules.",
        url: "CII-Diploma-in-Insurance"
    },
    {
        name: 'cii-certificate-in-insurance.astro',
        desc: "Professional assignment help for the CII Certificate in Insurance (Level 3). Get expert guidance for IF1, IF2, and all certificate modules.",
        keywords: "CII Certificate in Insurance, Level 3 Certificate help, CertCII assignment writing, CII IF1 help, CII certificate support",
        title: "CII Certificate in Insurance - Level 3 Support | CII Assignment Help",
        courseName: "CII Certificate in Insurance (Level 3)",
        courseDesc: "Professional assignment help and guidance for the CII Certificate in Insurance (Level 3) qualification.",
        url: "cii-certificate-in-insurance"
    },
    {
        name: 'cii-advanced-diploma-in-insurance.astro',
        desc: "Premium academic support for the CII Advanced Diploma in Insurance (ACII). Expert level 6 assignment writing and dissertation guidance.",
        keywords: "CII Advanced Diploma, ACII assignment help, Level 6 insurance diploma, ACII coursework writing, chartered insurance institute level 6",
        title: "CII Advanced Diploma (ACII) - Level 6 Support | CII Assignment Help",
        courseName: "CII Advanced Diploma in Insurance (ACII)",
        courseDesc: "Premium academic support and coursework guidance for the CII Advanced Diploma in Insurance (ACII) Level 6.",
        url: "cii-advanced-diploma-in-insurance"
    }
];

const dir = path.join(__dirname, 'src', 'pages');

files.forEach(fileInfo => {
    const filePath = path.join(dir, fileInfo.name);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Replace the meta block
    const newMeta = `    <meta name="description" content="${fileInfo.desc}">
    <meta name="keywords" content="${fileInfo.keywords}">
    <link rel="canonical" href="https://www.ciiassignmenthelp.com/${fileInfo.url}" />
    <title>${fileInfo.title}</title>
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://www.ciiassignmenthelp.com/${fileInfo.url}">
    <meta property="og:title" content="${fileInfo.title}">
    <meta property="og:description" content="${fileInfo.desc}">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://www.ciiassignmenthelp.com/${fileInfo.url}">
    <meta property="twitter:title" content="${fileInfo.title}">
    <meta property="twitter:description" content="${fileInfo.desc}">
    <link rel="icon"`;

    // replace from <meta name="description" down to <link rel="icon"
    content = content.replace(/<meta name="description"[\s\S]*?<link rel="icon"/i, newMeta);

    // 2. Add JSON-LD at the end of body if not already there
    if (!content.includes('application/ld+json')) {
        const schema = `
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "${fileInfo.courseName}",
        "description": "${fileInfo.courseDesc}",
        "provider": {
            "@type": "Organization",
            "name": "CII Assignment Help",
            "sameAs": "https://www.ciiassignmenthelp.com"
        }
    }
    </script>
</body>`;
        content = content.replace(/<\/body>/i, schema);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${fileInfo.name}`);
});
