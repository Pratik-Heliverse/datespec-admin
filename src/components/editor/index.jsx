import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
// @mui
import { styled } from '@mui/material/styles';
import { Box, TextField } from '@mui/material';
//
import EditorToolbar, { formats, redoChange, undoChange } from './EditorToolbar';

// ----------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    border: `solid 1px ${theme.palette.grey[500_32]}`,
    '& .ql-container.ql-snow': {
        borderColor: 'transparent',
        ...theme.typography.body1,
        fontFamily: theme.typography.fontFamily
    },
    '& .ql-editor': {
        minHeight: 200,
        maxHeight: 640,
        '&.ql-blank::before': {
            fontStyle: 'normal',
            color: theme.palette.text.disabled
        },
        '& pre.ql-syntax': {
            ...theme.typography.body2,
            padding: theme.spacing(2),
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.grey[900]
        }
    }
}));

// ----------------------------------------------------------------------

Editor.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
    helperText: PropTypes.node,
    simple: PropTypes.bool,
    sx: PropTypes.object,
    html: PropTypes.bool
};

export default function Editor({ id = 'minimal-quill', value, onChange, simple = true, html, helperText, ...other }) {
    const modules = {
        toolbar: {
            container: `#${id}`,
            handlers: {
                undo: undoChange,
                redo: redoChange
            }
        },
        history: {
            delay: 500,
            maxStack: 100,
            userOnly: true
        },
        syntax: true,
        clipboard: {
            matchVisual: false
        }
    };

    console.log(html);

    return (
        <>
            {html ? (
                <RootStyle>
                    <EditorToolbar id={id} isSimple={simple} />
                    <ReactQuill
                        value={value}
                        onChange={onChange}
                        modules={modules}
                        formats={formats}
                        placeholder="Write something awesome..."
                        {...other}
                    />

                    {helperText && helperText}
                </RootStyle>
            ) : (
                <TextField
                    sx={{ width: '100%', height: 'auto' }}
                    id="description"
                    placeholder="Add text here.... "
                    multiline
                    rows={6}
                    value={value}
                    onChange={onChange}
                    {...other}
                />
            )}
        </>
    );
}
