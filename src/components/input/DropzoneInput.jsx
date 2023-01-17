import './style/StyledDropzone.css'
// import { NormalButton } from "../buttons";
// import { Loading } from "../animation";
import { useDropzone } from 'react-dropzone'
import React, { useMemo } from 'react'
import FlexContainer from './style/FlexContainer'
import { useState, useEffect } from 'react'
const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#469585',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  cursor: 'pointer',
}

const activeStyle = {
  borderColor: '#2196f3',
}

const acceptStyle = {
  borderColor: '#00e676',
}

const rejectStyle = {
  borderColor: '#ff1744',
}

function DropzoneInput({ uploadFiles, name, label, small, type }) {
  const [files, setfiles] = useState([])
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({ accept: type ? type : '' })
  useEffect(() => {
    function clearAll() {
      setfiles([])
      uploadFiles((a) => ({
        ...a,
        [name]: null,
      }))
    }
    setfiles(
      acceptedFiles.map((file, i) => {
        const f = file.path.split('.')
        return (
          <div key={i} className="StyledDropzone__file">
            <div className="">{f[f.length - 1]}</div>
            <h4>{file.path}</h4>
            <i className="fas fa-times" onClick={() => clearAll()}></i>
            {/* <h5>{Math.round(file.size / 1024)}kb</h5> */}
          </div>
        )
      }),
    )
    if (acceptedFiles.length > 0) {
      uploadFiles((a) => ({
        ...a,
        [name]: acceptedFiles[0],
      }))
    }
  }, [acceptedFiles, uploadFiles, name])
  // const files = acceptedFiles.map((file, i) => {
  //   const f = file.path.split(".");
  //   return (
  //     <div key={i} className="StyledDropzone__file">
  //       <div className="">{f[f.length - 1]}</div>
  //       <h4>{file.path}</h4>
  //       <i className="fas fa-times" onClick={() => clearAll()}></i>
  //       {/* <h5>{Math.round(file.size / 1024)}kb</h5> */}
  //     </div>
  //   );
  // });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept],
  )
  return (
    <FlexContainer small={small} className="StyledDropzone">
      <label className="StyledDropzone__label">{label}</label>
      <div className="StyledDropzone__square" {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <i className="fas fa-cloud-upload-alt"></i>
        <h4 className="StyledDropzone__h3--gray">
          Arrastra y suelta tus archivos aquí
        </h4>
        <h4 className="StyledDropzone__h3--orange">o presiona para buscar</h4>
        {/* <h4 className="StyledDropzone__h3--orange">
          (Solo se aceptaran imágenes)
        </h4> */}
      </div>
      <div className="StyledDropzone__fields">
        {files.length !== 0 ? (
          <div className="StyledDropzone__container">
            <h3 className="StyledDropzone__Fh3">Listos para enviar</h3>
            {files}
            {/* <div className="StyledDropzone__btn">
              {load ? (
                <NormalButton
                  onClick={() => uploadFiles(acceptedFiles[0], name)}
                >
                  Subir archivo
                </NormalButton>
              ) : (
                <Loading />
              )}
            </div> */}
          </div>
        ) : (
          <h4 className="StyledDropzone__Fh4">No hay documentos</h4>
        )}
      </div>
    </FlexContainer>
  )
}

export default DropzoneInput
