interface InputBoxProps {
  onClick: () => void;
}

function InputBox({ onClick }: InputBoxProps) {
  return (
    <>
        <div className="mb-3">
          <label htmlFor="inputBox">Add an item</label>
          <input type="text" className="form-control" id="inputBox" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={onClick}>Submit</button>
    </>
  )
}

export default InputBox;