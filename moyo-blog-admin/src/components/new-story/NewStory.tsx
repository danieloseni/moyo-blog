import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import TitleTIle from 'components/title-tiles/TitleTIle';
import Switch from 'react-switch'
import SubscriberBox from 'components/subscriber-box/SubscriberBox';

const NewStory = (props: object) => {
    const [alertSubscribers, toggleSubscribersAlert] = useState<boolean>(false)
    const [notifyAllSubscribers, togglenotifyAllSubscribersOption] = useState<boolean>(true)
    return (
        <Fragment>


            <div className="row">
                <div className="col-6">

                    <div className="mb-3">
                        <TitleTIle title="What are we talking about today?" />
                        <div className="mb-2">
                            <input type="text" id="simpleinput" className="form-control" />
                        </div>
                        <Editor
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class form-control"
                            toolbarClassName="toolbar-class "
                        //   wrapperStyle={<wrapperStyleObject>}
                        //   editorStyle={<editorStyleObject>}
                        //   toolbarStyle={<toolbarStyleObject>}
                        />
                    </div>
                </div>

                <div className="col-6">
                    <TitleTIle title="Post Image" />

                    <div className="card file-upload-card">
                        <div className="card-body">
                            <h4 className="header-title">Dropify File Upload</h4>
                            <p className="sub-header">
                                Override your input files with style. Your so fresh input file — Default version.
                            </p>

                            <input type="file" data-plugins="dropify" data-height="300" />

                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="mt-3">
                                        <input type="file" data-plugins="dropify" data-default-file="../assets/images/small/img-2.jpg" />
                                        <p className="text-muted text-center mt-2 mb-0">Default File</p>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="mt-3">
                                        <input type="file" data-plugins="dropify" disabled={true} />
                                        <p className="text-muted text-center mt-2 mb-0">Disabled the input</p>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="mt-3">
                                        <input type="file" data-plugins="dropify" data-max-file-size="1M" />
                                        <p className="text-muted text-center mt-2 mb-0">Max File size</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <TitleTIle title="Categories" />

            </div>

            <div className="row mb-4">
                <div className="col-3 mb-2">
                    <label htmlFor="simpleinput" className="form-label together g-2 align-items-center">
                        <span>
                            Hair care tips
                        </span>
                        <span>
                            <Switch onChange={togglenotifyAllSubscribersOption} height={18} width={52} checked={true} />

                        </span>
                    </label>

                </div>
                <div className="col-3">
                    <label htmlFor="simpleinput" className="form-label together g-2 align-items-center">
                        <span>
                            Product reviews
                        </span>
                        <span>
                            <Switch onChange={togglenotifyAllSubscribersOption} height={18} width={52} checked={true} />

                        </span>
                    </label>

                </div>
                <div className="col-3">
                    <label htmlFor="simpleinput" className="form-label together g-2 align-items-center">
                        <span>
                            Photography
                        </span>
                        <span>
                            <Switch onChange={togglenotifyAllSubscribersOption} height={18} width={52} checked={true} />

                        </span>
                    </label>

                </div>
                <div className="col-3">
                    <label htmlFor="simpleinput" className="form-label together g-2 align-items-center">
                        <span>
                            Lifestyle
                        </span>
                        <span>
                            <Switch onChange={togglenotifyAllSubscribersOption} height={18} width={52} checked={true} />

                        </span>
                    </label>

                </div>
                <div className="col-3">
                    <label htmlFor="simpleinput" className="form-label together g-2 align-items-center">
                        <span>
                            DIYs
                        </span>
                        <span>
                            <Switch onChange={togglenotifyAllSubscribersOption} height={18} width={52} checked={true} />

                        </span>
                    </label>

                </div>

            </div>


            <div className="row">
                <div className="col-12">
                    <div className="together g-2 align-items-center">
                        <TitleTIle title="Send Notification To Subscribers" />
                        <Switch onChange={toggleSubscribersAlert} checked={alertSubscribers} />
                    </div>
                </div>
            </div>

            {alertSubscribers && <div className="row mb-4">
                <div className="col-6">



                    <div>
                        <div className="together g-2 align-items-center">
                            <label htmlFor="simpleinput" className="form-label">Send Notification to all</label>
                            <Switch onChange={togglenotifyAllSubscribersOption} height={18} width={52} checked={notifyAllSubscribers} />

                        </div>

                        <SubscriberBox />
                    </div>



                </div>

                <div className="col-6">
                    <label htmlFor="simpleinput" className="form-label">Add a custom message. This message will be sent along side the notification</label>
                    <textarea className="form-control" id="example-textarea" rows={14}></textarea>
                </div>
            </div>}

            <div className="row">
                <div className="col-12 text-end">
                    <div className="btn-large-custom btn rounded-button bg-white">
                        Post
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

NewStory.propTypes = {

}

export default NewStory
