import { t } from "i18next";

export function SiteFooter() {
  return (
    <footer className="border-grid border-t py-2 md:py-0">
      <div className="container-wrapper">
        <div className="container pt-2">
          <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            🌱 Built by{" "}
            <a
              href="https://github.com/oodicraft"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              oodicraft
            </a>
            . Thanks to original author{" "}
            <a
              href="https://github.com/flashlab"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              ZZBD
            </a>
            . Source at{" "}
            <a
              href="https://github.com/oodicraft/turn-video-into-live-photo"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            . Document at{" "}
            <a
              href={t("link.document")}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Blog
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  )
}
