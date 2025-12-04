const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "sourceFiles");
const organizedDir = path.join(__dirname, "organizedFiles");

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
  videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
  audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
  code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
  archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
  spreadsheets: [".xls", ".xlsx", ".csv"],
  others: [],
};

const testFiles = [
  "vacation.jpg",
  "report.pdf",
  "presentation.pptx",
  "music.mp3",
  "video.mp4",
  "script.js",
  "data.csv",
  "archive.zip",
  "photo.png",
  "notes.txt",
  "app.py",
  "movie.avi",
  "song.wav",
  "backup.tar.gz",
  "random.xyz",
  "nodejs.zip",
];

function initializedDirectories() {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });

    testFiles.forEach((file) => {
      fs.writeFileSync(path.join(sourceDir, file), `Content of ${file}`);
    });
  }

  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir, { recursive: true });

    Object.keys(categories).forEach((folder) => {
      let categoryPath = path.join(organizedDir, folder);

      if (!fs.existsSync(categoryPath)) {
        fs.mkdirSync(categoryPath, { recursive: true });
      }
    });
  }
}

function getCategory(fileName) {
  const ext = path.extname(fileName).toLowerCase();

  for (const [folder, extension] of Object.entries(categories)) {
    if (extension.includes(ext)) return folder;
  }

  return "others";
}

function organizeFile() {
  const files = fs.readdirSync(sourceDir);

  if (files.length === 0) {
    console.log("File not found!");
    return;
  }

  console.log(`Found ${files.length} files for organize!`);

  files.forEach((file) => {
    const sourcePath = path.join(sourceDir, file);
    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) return;

    const category = getCategory(file);

    const destinationPath = path.join(organizedDir, category, file);

    fs.copyFileSync(sourcePath, destinationPath);
  });
}

function showHelp() {
  console.log(`File organizer - usage

        commands:
        init - create files
        organize - organize files into categories
        
        example:
        node file_organizer init
        node file_organizer organize`);
}

const command = process.argv[2];

switch (command) {
  case "init":
    initializedDirectories();
    break;

  case "organize":
    organizeFile();
    break;

  default:
    showHelp();
    break;
}
