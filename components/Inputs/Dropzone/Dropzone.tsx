import {FC, useState, useCallback, useEffect} from 'react'
import Dropzone, {FileRejection, DropEvent} from 'react-dropzone'
import {makeStyles} from '@material-ui/core/styles'
import {PermMediaOutlined, Cancel} from '@material-ui/icons'
import {Box, IconButton} from '@material-ui/core'

const useStyles = makeStyles({
  buttonStyles: {
    backgroundColor: '#7A7B971D',
    fontSize: '.8 rem',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: '#2B80FF58',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 2,
    color: '#A7AFB7',
    marginTop: 15,
    width: 350,
  },
  labelStyles: {
    fontSize: '.8 rem',
    color: '#000',
  },
  fileContainerStyles: {
    color: '#A7AFB7',
    paddingLeft: 15,
  },
  fileIconStyles: {
    color: '#2B80FF',
    marginRight: 15,
  },
  deleteIconStyle: {
    color: '#fa0d1d',
    zIndex: 1000,
  },
})

export type {FileRejection, DropEvent}

interface IProps {
  label: string
  disabled?: boolean
  fileTypesAccepted: string
  files: File[]
  maxAllowedSize?: number
  onDrop: <T extends File>(
    acceptedFiles: T[],
    fileRejections: FileRejection[],
    event: DropEvent,
  ) => void
  onRemoveFiles: (acceptedFiles: File[]) => void
  onCancelUpload?: () => void
  buttonText?: string
}

const FileDropzone: FC<IProps> = ({
  label,
  disabled = false,
  maxAllowedSize,
  fileTypesAccepted,
  onDrop,
  files,
  onRemoveFiles,
  onCancelUpload,
  buttonText,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const styles = useStyles()

  const handleFileSetter = useCallback(
    (dropFiles: File[], rejected: FileRejection[], event: DropEvent): void => {
      let validFiles: File[] = []
      let inValidFiles: FileRejection[] = rejected

      if (maxAllowedSize) {
        dropFiles.forEach(file => {
          if (file.size < maxAllowedSize) {
            validFiles.push(file)
          } else {
            inValidFiles.push({
              file,
              errors: [
                {
                  message: `The file ${
                    file.name
                  } exceeded the maximum allowed size of ${
                    maxAllowedSize / 1048576
                  }MB`,
                  code: 'file-too-large',
                },
              ],
            })
          }
        })
      } else {
        validFiles = dropFiles
      }

      const allFiles = [...selectedFiles, ...validFiles]
      setSelectedFiles(allFiles)
      onDrop(allFiles, inValidFiles, event)
    },
    [selectedFiles, onDrop],
  )

  const handleFileDelete = useCallback(
    (index: number): void => {
      const filteredFiles = selectedFiles.filter(
        (file: File, fileIndex: number): boolean => fileIndex !== index,
      )
      setSelectedFiles(filteredFiles)
      onRemoveFiles(filteredFiles)
    },
    [selectedFiles, setSelectedFiles, onRemoveFiles],
  )

  useEffect(() => {
    if (files?.length) {
      setSelectedFiles([...files])
    }
  }, [files])

  return (
    <div>
      <span className={styles.labelStyles}>{label}</span>
      <div className={styles.fileContainerStyles}>
        {selectedFiles.map((file: File, index: number) => {
          return (
            <Box className={styles.fileContainerStyles} key={`file-${index}`}>
              <PermMediaOutlined className={styles.fileIconStyles} />
              {file.name}
              <IconButton
                className={styles.deleteIconStyle}
                onClick={() => handleFileDelete(index)}
              >
                <Cancel />
              </IconButton>
            </Box>
          )
        })}
      </div>
      <Dropzone
        onDrop={handleFileSetter}
        onFileDialogCancel={onCancelUpload && onCancelUpload}
        accept={fileTypesAccepted}
        disabled={disabled}
      >
        {({getRootProps, getInputProps}) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div className={styles.buttonStyles}>{buttonText}</div>
          </div>
        )}
      </Dropzone>
    </div>
  )
}

export default FileDropzone
