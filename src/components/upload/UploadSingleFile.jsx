import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

//
import Image from '../Image.jsx';
import RejectionFiles from './RejectionFiles.jsx';
import BlockContent from './BlockContent.jsx';

// ----------------------------------------------------------------------

const DropZoneStyle = styled('div')(({ theme }) => ({
    outline: 'none',
    overflow: 'hidden',
    position: 'relative',
    padding: theme.spacing(5, 1),
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create('padding'),
    backgroundColor: theme.palette.background.neutral,
    border: `1px dashed ${theme.palette.grey[500_32]}`,
    '&:hover': { opacity: 0.72, cursor: 'pointer' }
}));

// ----------------------------------------------------------------------

UploadSingleFile.propTypes = {
    error: PropTypes.bool,
    file: PropTypes.oneOfType(PropTypes.string, PropTypes.object),

    helperText: PropTypes.node,
    sx: PropTypes.object
};

export default function UploadSingleFile({ error = false, file, helperText, sx, ...other }) {
    const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
        multiple: false,
        ...other
    });

    return (
        <Box sx={{ width: '100%', ...sx, height: 'fit-content' }}>
            <DropZoneStyle
                {...getRootProps()}
                sx={{
                    ...(isDragActive && { opacity: 0.72 }),
                    ...((isDragReject || error) && {
                        color: 'error.main',
                        borderColor: 'error.light',
                        bgcolor: 'error.lighter'
                    }),
                    ...(file && {
                        padding: '12% 0'
                    }),
                    objectFit: 'contain'
                }}
            >
                <input {...getInputProps()} />

                {<BlockContent />}

                {file?.preview && (
                    <Image
                        alt="file preview"
                        src={file.preview}
                        sx={{
                            top: 8,
                            left: 8,
                            borderRadius: 1,
                            position: 'absolute',
                            width: 'calc(100% - 16px)',
                            height: '240px',
                            objectFit: 'contain'
                        }}
                    />
                )}
                {file && typeof file === 'string' && (
                    <Image
                        alt="file preview"
                        src={
                            file.includes('media.veducation.world') || file.includes('cloudfront.net')
                                ? file
                                : `https://media.veducation.world${file}`
                        }
                        sx={{
                            top: 8,
                            left: 8,
                            borderRadius: 1,
                            position: 'absolute',
                            width: 'calc(100% - 16px)',
                            height: '240px',
                            objectFit: 'contain',
                            backgroundColor: '#fff'
                        }}
                    />
                )}

                {file && typeof file === 'object' && (
                    <Image
                        alt="file preview"
                        src={window.URL.createObjectURL(file)}
                        sx={{
                            top: 8,
                            left: 8,
                            borderRadius: 1,
                            position: 'absolute',
                            width: 'calc(100% - 16px)',
                            height: '240px',
                            objectFit: 'contain',
                            backgroundColor: '#fff'
                        }}
                    />
                )}

                {/* {isUploading && (
          <Box sx={{ backgroundColor: '#fff' }}>
            <CircularProgress
              sx={{
                top: '50%',
                left: '50%',
                zIndex: 3,
                transform: 'translate(-50%, -50%)',
                borderRadius: 1,
                position: 'absolute',
                objectFit: 'contain',
              }}
            />
          </Box>
        )} */}
            </DropZoneStyle>

            {fileRejections.length > 0 && <RejectionFiles fileRejections={fileRejections} />}
            {/* {file && <MultiFilePreview files={[file]} showPreview />} */}

            {helperText && helperText}
        </Box>
    );
}
