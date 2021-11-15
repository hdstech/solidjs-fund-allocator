import { Component, createSignal } from "solid-js";
import { styled } from "solid-styled-components";
import { funds } from "../store";
import styles from "../App.module.css";

const PickerStyled = styled("div")`
	background-color: #fff;
	padding: 1em;
	display: flex;
	justify-content: space-between;
	margin: 10px 0 30px 0;
	max-height: 50px;
	border-radius: 5px;
	box-shadow: 0px 4px 7px 1px #ebe7e7;
`;

export const AmountPicker: Component<{ id: number }> = (props) => {
	const [allocation, setAllocation] = createSignal(funds.getFund(props.id).percentage * 100);
	const onChange = (e: any) => {
		setAllocation(e.currentTarget.value);
	};
	const updateState = () => {
		const val = allocation() / 100;
		funds.updateFund({ idx: props.id, percentage: val });
	};

	return (
		<PickerStyled>
			<p>
				<span>{funds.getFund(props.id)?.name}</span>
				{"  "}
				<span>
					<input class={styles.allocationInput} value={allocation()} onkeyup={onChange} />
				</span>
				<button class={styles.addAmountButton} onClick={updateState}>
					Add Amount
				</button>
			</p>
		</PickerStyled>
	);
};
